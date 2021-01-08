import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxPaginationModule,
        FormsModule      
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    var app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a title "experianProject"', () => {
    fixture = TestBed.createComponent(AppComponent);
    var component = fixture.componentInstance;
    expect(component.title).toBe('experianProject');
  });
 
});












