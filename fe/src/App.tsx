import axios from 'axios';
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [ appName, setAppName ] = useState("");
  const [ userId, setUserId ] = useState("");
  const [ action, setAction ] = useState("");
  const [ logs, setLogs ] = useState<string[]>([]);

  useEffect(() => {
    axios.get("https://log-be.cfapps.us10-001.hana.ondemand.com/log/list/translation-wb").then(response => {
      setLogs(response.data.rows)
      console.log(response)
    }).catch(e => console.error(e.message));
  }, []);

  async function sendRequest(event: any) {
    event.preventDefault();
    const response = await axios.post("https://log-be.cfapps.us10-001.hana.ondemand.com/log/add", {
      appName,
      userId,
      action,
      success: true,
      fileOptions: {
        clientName: "myyyy"
      }
    });
    console.log(response);
  }

  const logElements = logs.map((log, idx) => {
    return <li key={idx}>{log}</li>
  })

  return (
    <>
      <form>
        <div>
          <label htmlFor='appName'>appName</label>
          <input name='appName' type='text' onChange={(event) => {setAppName(event.target.value)}}/>
        </div>
        <div>
          <label htmlFor='userId'>userId</label>
          <input name='userId' type='text' onChange={(event) => {setUserId(event.target.value)}}/>
        </div>
        <div>
          <label htmlFor='action'>action</label>
          <input name='action' type='text' onChange={(event) => {setAction(event.target.value)}}/>
        </div>
        <button type="submit" onClick={sendRequest}>SUBMIT</button>
      </form>
      <div>
        <h3>Logs</h3>
        <ul>{logElements}</ul>
      </div>
    </>
  )
}

export default App
