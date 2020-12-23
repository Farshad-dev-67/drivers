import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DriversList} from '../drivers-list.interface';
import {DriversListService} from '../drivers-list.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-drivers-creator',
  templateUrl: './drivers-creator.component.html',
  styleUrls: ['./drivers-creator.component.scss']
})
export class DriversCreatorComponent implements OnInit {

  registerForm: FormGroup;
  model: DriversList = new DriversList();
  hasError: boolean;

  constructor(
    private fb: FormBuilder,
    private driversListService: DriversListService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  get f(): any {
    return this.registerForm.controls;
  }

  initForm(): void {
    this.registerForm = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50)
        ]),
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.maxLength(320),
          // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
      company: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50)
        ]),
      ],
      tel: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11)
        ]),
      ],
      username: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(20)
        ]),
      ],
      website: [
        '',
        Validators.compose([
          Validators.required
        ]),
      ]
    });
  }

  onSubmitForm(): void {
    this.hasError = false;
    this.driversListService.postUser(this.model).subscribe((res) => {
      if (res.id) {
        this.router.navigate(['drivers-list']);
      }
    });
  }
}
