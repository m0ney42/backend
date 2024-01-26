import type { RefreshToken } from '@prisma/client';
import type { Mock } from '../../types';
import type { RefreshTokenRepository } from 'models/refresh-token';
import { RefreshTokenRepositoryService } from 'repositories/postgres/refresh-token/refresh-token-repository.service';

export const makeRefreshTokenRepositoryMock = () => {
	const base: RefreshToken = {
		accountId: 'accountId',
		refreshToken: 'refreshToken',
		createdAt: new Date(),
	};

	const mock: Mock<RefreshTokenRepository> = {
		create: jest.fn(),
		get: jest.fn(),
	};

	const module = {
		provide: RefreshTokenRepositoryService,
		useValue: mock,
	};

	const outputs = {
		create: {
			success: base,
		},
		get: {
			success: {
				accountId: 'accountId',
				refreshToken: 'refreshToken',
				createdAt: new Date(),
			},
		},
	};

	return {
		base,
		mock,
		module,
		outputs,
	};
};
