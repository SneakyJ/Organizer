import { TestBed } from '@angular/core/testing';

import { UsersInDatabaseService } from './users-in-database.service';

describe('GetDataFromServerService', () => {
  let service: UsersInDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersInDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
