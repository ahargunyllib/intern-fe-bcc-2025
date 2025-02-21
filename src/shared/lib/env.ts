import { type InferType, object, string } from "yup";

const EnvSchema = object({
	APP_URL: string().required(),
	API_URL: string().required(),
	API_KEY: string().required(),
	SESSION_PASSWORD: string().required().min(32),
});

function validateEnv() {
	const env = process.env;
	const result = EnvSchema.validateSync(env, { abortEarly: false });

	return result;
}

export const env = validateEnv();

export type Env = InferType<typeof EnvSchema>;
