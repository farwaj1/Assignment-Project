import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsListComponent } from './items-list.component';

describe('ItemsListComponent', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   
  it('should have Search in "Search Button"', () => {
    fixture = TestBed.createComponent(ItemsListComponent);
    var btn = fixture.debugElement.nativeElement.querySelector('#searchBtn');
    expect(btn.innerHTML).toBe('Search');
  });


  it('should render search input', () => {
    var compiled = fixture.debugElement.nativeElement;
    var searchInput = compiled.querySelector('input[id="titleSearch"]');

    expect(searchInput).toBeTruthy();
  }); 
  

});
