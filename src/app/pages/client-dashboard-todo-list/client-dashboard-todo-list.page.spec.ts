import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientDashboardTodoListPage } from './client-dashboard-todo-list.page';

describe('ClientDashboardTodoListPage', () => {
  let component: ClientDashboardTodoListPage;
  let fixture: ComponentFixture<ClientDashboardTodoListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDashboardTodoListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientDashboardTodoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
