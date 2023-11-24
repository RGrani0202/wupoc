import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {FormsModule} from "@angular/forms";
import { AddReceiverComponent } from './add-receiver.component';
import { ReceiversService} from '../services/receivers.service';
import { Router } from '@angular/router';
describe('AddReceiverComponent', () => {
  let component: AddReceiverComponent;
  let fixture: ComponentFixture<AddReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      declarations: [ AddReceiverComponent ],
      providers: [ReceiversService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  // it('should have a submit button initially disable',()=>{
  //   const submitButton:HTMLButtonElement = fixture.nativeElement.querySelector('button[type = "submit"]');
  //   expect(submitButton.disabled).toBeFalse();
  // })

  // it('should initialize with default values',()=>{
  //   expect(component.selectedCountry).toBeUndefined();
  //   expect(component.countryData).toEqual({});
  //   expect(component.countries).toEqual([]);
  //   expect(component.receiverList).toEqual([]);
  // })
  
  // it('should return false for isLastNameRequired() when the selected country is not defined', () => {
  //   component.selectedCountry = undefined;
 
  //   const result = component.isLastNameRequired();
 
  //   expect(result).toBeFalse();
  // });


  // it('should return false for isLastNameRequired() when countryData is not defined', () => {
  //   component.selectedCountry = 'usa';
  //   component.countryData = undefined;
 
  //   const result = component.isLastNameRequired();
 
  //   expect(result).toBeFalse();
  // });

  // it('should return false for isEmailRequired() when the selected country is not in countryData', () => {
  //   component.selectedCountry = 'nonexistent_country';
  //   component.countryData = { usa: { isEmailRequired: true } };
 
  //   const result = component.isEmailRequired();
 
  //   expect(result).toBeFalse();
  // });

  // it('should return false for isEmailRequired() when countryData is not defined', () => {
  //   component.selectedCountry = 'usa';
  //   component.countryData = undefined;
 
  //   const result = component.isEmailRequired();
 
  //   expect(result).toBeFalse();
  // });

  // it('should return false for isLastNameRequired() when the selected country is not in countryData', () => {
  //   component.selectedCountry = 'nonexistent_country';
  //   component.countryData = { usa: { isLastNameRequired: true } };
 
  //   const result = component.isLastNameRequired();
 
  //   expect(result).toBeFalse();
  // });

});
