import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ReceiversService } from './receivers.service';

describe('ReceiversService', () => {
  let service: ReceiversService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule]
    });
    service = TestBed.inject(ReceiversService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
