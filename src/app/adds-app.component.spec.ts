import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AddsAppAppComponent } from '../app/adds-app.component';

beforeEachProviders(() => [AddsAppAppComponent]);

describe('App: AddsApp', () => {
  it('should create the app',
      inject([AddsAppAppComponent], (app: AddsAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'adds-app works!\'',
      inject([AddsAppAppComponent], (app: AddsAppAppComponent) => {
    expect(app.title).toEqual('adds-app works!');
  }));
});
