import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UpdateReceiverComponent } from './update-receiver.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import{of} from 'rxjs';
import { ReceiversService } from '../services/receivers.service';
import { ActivatedRoute, Router } from '@angular/router';
describe('UpdateReceiverComponent', () => {
  let component: UpdateReceiverComponent;
  let fixture: ComponentFixture<UpdateReceiverComponent>;
  let receiversServiceSpy: jasmine.SpyObj<ReceiversService>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('ReceiversService', [
      'getReceiverById',
      'getConfig',
      'updateReceiverById',
    ]);

    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      declarations: [ UpdateReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
   
  it('should initialize with default values', () => {
    expect(component.receiverById).toEqual({});
    expect(component.selectedCountry).toBeUndefined();
    expect(component.countryData).toEqual({});
    expect(component.countries).toEqual([]);
  });

  it('should set selectedCountry when onCountryChange is called', () => {
    component.onCountrChange('usa');
    expect(component.selectedCountry).toBe('usa');
  });

  // it('should update receiver and navigate on form submission', () => {
  //   const updateData = { firstname: 'test', lastname: 'test', email: 'test@example.com' };
  //   receiversServiceSpy.updateReceiverById.and.returnValue(of({}));
 
  //   component.update(updateData);
 
  //   expect(receiversServiceSpy.updateReceiverById).toHaveBeenCalledWith(1, updateData);
  //   expect(router.navigate).toHaveBeenCalledWith(['/my-receivers']);
  // });

});
