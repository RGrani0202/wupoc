import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {FormsModule} from "@angular/forms";
import { AddReceiverComponent } from './add-receiver.component';

describe('AddReceiverComponent', () => {
  let component: AddReceiverComponent;
  let fixture: ComponentFixture<AddReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      declarations: [ AddReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('app-add-receiver', () => {
    expect(component).toBeTruthy();
  });
});
