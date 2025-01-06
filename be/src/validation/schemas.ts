import Joi from "joi";

// Check if possible add a fileOptions schema
export const translationWbAddBodySchema = Joi.object({
    userId: Joi.string().email().required(),
    action: Joi.string().max(50).required(),
    success: Joi.boolean().required(),
    fileOptions: Joi.object()
});

export const translationWbListQuerySchema = Joi.object({
    startDate: Joi.date(),
    endDate: Joi.date(),
    action: Joi.string().alphanum().max(50),
    user_id: Joi.string().email(),
    success: Joi.boolean(),
    sortBy: Joi.string().max(100),
    sortOrder: Joi.string().pattern(/^(asc|ASC|desc|DESC)$/)
});