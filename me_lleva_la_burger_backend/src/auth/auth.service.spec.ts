import 'reflect-metadata';
import { AuthService } from './auth.service';
import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;
  let customerRepo;

  const mockCustomer = {
    id_cliente: 1,
    correo_cliente: 'test@example.com',
    contrasena_cliente: 'hashedPassword',
    nombre_cliente: 'Test',
    apellido_cliente: 'User',
  };

  const mockRepository = {
    findOne: jest.fn(),
  };

  const mockJwtService = {
    sign: jest.fn(() => 'mockToken'),
  };

  beforeEach(() => {
    service = new AuthService(
      mockRepository as any, // customer
      mockRepository as any, // employee
      mockJwtService as any,
      { log: jest.fn() } as any, // mockLogger
    );
    customerRepo = mockRepository;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('loginCustomer', () => {
    it('should return token and user when credentials are valid', async () => {
      jest.spyOn(customerRepo, 'findOne').mockResolvedValue(mockCustomer);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(true as never);

      const result = await service.loginCustomer({
        correo_cliente: 'test@example.com',
        contrasena_cliente: 'password',
      });

      expect(result).toEqual({
        access_token: 'mockToken',
        user: {
          id: 1,
          nombre: 'Test',
          apellido: 'User',
          email: 'test@example.com',
          tipo: 'customer',
        },
      });
    });

    it('should throw UnauthorizedException when customer not found', async () => {
      jest.spyOn(customerRepo, 'findOne').mockResolvedValue(null);

      await expect(
        service.loginCustomer({
          correo_cliente: 'wrong@example.com',
          contrasena_cliente: 'password',
        }),
      ).rejects.toThrow(UnauthorizedException);
    });
  });
});
