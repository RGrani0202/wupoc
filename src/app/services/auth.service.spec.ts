import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set loggedIn to true on successful login', () => {
    const loginData = { email: 'test@hcl.com', password: '123' };
    service.Islogin(loginData).subscribe((response) => {
      expect(response).toEqual({ name: 'Test Test', email: 'test' });
      expect(service.checkLogin()).toBeTrue();
    });
  });
 
  it('should throw an error on failed login', () => {
    const loginData = { email: 'invalid', password: 'invalid' };
    service.Islogin(loginData).subscribe({
      error: (err) => {
        expect(err.message).toEqual('Failed to Login');
        expect(service.checkLogin()).toBeFalse();
      },
    });
  });
 
  it('should set loggedIn to false on logout', () => {
    service.logOut();
    expect(service.checkLogin()).toBeFalse();
  });
});
