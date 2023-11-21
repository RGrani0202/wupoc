import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MyReceiversComponent } from './my-receivers.component';
import { ReceiversService } from '../services/receivers.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
 
describe('MyReceiversComponent', () => {
  let component: MyReceiversComponent;
  let fixture: ComponentFixture<MyReceiversComponent>;
  let mockReceiversService: jasmine.SpyObj<ReceiversService>;
 
  beforeEach(() => {
    const spy = jasmine.createSpyObj('ReceiversService', ['getReceivers', 'deleteReceiver']);
    const routerSpy = jasmine.createSpyObj('Router',['navigate']);
 
    TestBed.configureTestingModule({
      declarations: [MyReceiversComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: ReceiversService, useValue: spy },
                  { provider:Router, useValue:routerSpy},],
    });
 
    fixture = TestBed.createComponent(MyReceiversComponent);
    component = fixture.componentInstance;
    mockReceiversService = TestBed.inject(ReceiversService) as jasmine.SpyObj<ReceiversService>;
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should fetch receivers on initialization', () => {
    const mockReceivers = [{
      "country": "usa",
      "firstname": "uytre",
      "type": "",
      "countrycode": "",
      "mobileno": "",
      "lastname": "test",
      "email": "kjhg",
      "id": 6
    }];
    mockReceiversService.getReceivers.and.returnValue(of(mockReceivers));
 
    fixture.detectChanges();
 
    expect(component.receiverList).toEqual(mockReceivers);
  });
 

 
 
});