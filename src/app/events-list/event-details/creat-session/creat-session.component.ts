import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISession } from '../../shared/event.model';

@Component({
  selector: 'create-session',
  templateUrl: './creat-session.component.html',
  styleUrls: ['./creat-session.component.css']
})
export class CreatSessionComponent implements OnInit {

  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();


  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  constructor(private router:Router) { }

  ngOnInit() {

    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWord(['Fuck', 'fuck', 'bitch'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    }
    );

  }

  // Custom Validators to catch words we need to not throw
  private restrictedWord(words) {
    return (field: FormControl): { [key: string]: any } => {
      if (!words) {
        return null;
      }
      const invalidWords = words.map(w => field.value.includes(w) ? w : null).filter(w => w != null);
      return invalidWords && invalidWords.length > 0 ? { 'restrictedWord': invalidWords.join(', ') } : null;
    };
  }

  saveSession(formValues) {
    const session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    };
    this.saveNewSession.emit(session);
    console.log(session);
  }
  cancel() {
    this.cancelAddSession.emit();
    // this.router.navigate(['/events'])
  }


}
