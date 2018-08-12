import { TestBed, inject } from '@angular/core/testing';

import { ProjectApiService } from '@app/project-modules/project-core/project-api.service';

describe('ProjectApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectApiService]
    });
  });

  it('should be created', inject([ProjectApiService], (service: ProjectApiService) => {
    expect(service).toBeTruthy();
  }));
});
