import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ReceiversService } from './receivers.service';

describe('ReceiversService', () => {
  let service: ReceiversService;
  let httpMock:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule],
      providers:[ReceiversService],
    });
    service = TestBed.inject(ReceiversService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  
  afterEach(()=>{
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should retrive receiver from the API via GET',()=>{
    const mockReceivers = [{
      "country": "usa",
      "firstname": "test",
      "type": "9899",
      "countrycode": "98",
      "mobileno": "098765432",
      "email": "test@123",
      "id": 1
    }];
    service.getReceivers().subscribe((receiver)=>{
      expect(receiver).toEqual(mockReceivers);
    });
    const req = httpMock.expectOne(service.url);
    expect(req.request.method).toBe('GET');

    req.flush(mockReceivers);
  })

  it('should retrive a receiver by Id from the API',()=>{
    const mockReceiver={
      "country": "usa",
      "firstname": "test",
      "type": "9899",
      "countrycode": "98",
      "mobileno": "098765432",
      "email": "test@123",
      "id": 1
    };
    const mockReceiverId = 1;

    service.getReceiverById(mockReceiverId).subscribe((receiver)=>{
      expect(receiver).toEqual(mockReceiver);
    });

    const req = httpMock.expectOne(`${service.url}/${mockReceiverId}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockReceiver);
  });

  it('should save a receiver to the API via POST', ()=>{
    const mockReceiver={
      "country": "usa",
      "firstname": "test",
      "type": "9899",
      "countrycode": "98",
      "mobileno": "098765432",
      "email": "test@123",
      "id": 1
    };

    service.saveReceiver(mockReceiver).subscribe();
    const req = httpMock.expectOne(service.url);
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

  it('should delete a receiver from the API via DELETE',()=>{
    const mockReceiverId=1;
    service.deleteReceiver(mockReceiverId).subscribe();

    const req = httpMock.expectOne(`${service.url}/${mockReceiverId}`);
    expect(req.request.method).toBe('DELETE');

    req.flush({});
  });

  it('should update a receiver by ID on API via PUT',()=>{
   const mockReceiverId=1;
   const mockReceiver={
    "country": "usa",
    "firstname": "test",
    "type": "9899",
    "countrycode": "98",
    "mobileno": "098765432",
    "email": "test@123",
    "id": 1
  };

  service.updateReceiverById(mockReceiverId,mockReceiver).subscribe();

  const req=httpMock.expectOne(`${service.url}/${mockReceiverId}`);
  expect(req.request.method).toBe('PUT');

  req.flush({});
  
  });

  it('should retrive configuration from the API via GET', ()=>{
    const mockConfig={"usa": {
      "isFirstNameRequired": true,
      "isLastNameRequired": false,
      "isEmailRequired": true
    }}

    service.getConfig().subscribe((config)=>{
      expect(config).toEqual(mockConfig);
    });

    const req = httpMock.expectOne(service.configurl);
    expect(req.request.method).toBe('GET');
    req.flush(mockConfig);
  })



});
