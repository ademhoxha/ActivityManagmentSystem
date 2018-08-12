import { TestBed, inject } from '@angular/core/testing';

import { AuthApiService } from '@app/login-page/auth-api/auth-api.service';

describe('AuthApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthApiService]
    });
  });

  it('should be created', inject([AuthApiService], (service: AuthApiService) => {
    expect(service).toBeTruthy();
  }));
});
