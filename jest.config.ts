module.exports = {
	testEnvironment: 'node',
	testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
	testPathIgnorePatterns: ['/node_modules/'],
	setupFilesAfterEnv: ['./jest.setup.ts'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
};
