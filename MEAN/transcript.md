angular essentials ext.
string interpolation:
<textarea rows="6" [value]="'Test'" >{{newPost}}</textarea>

<textarea rows="6" [value]="newPost" #postInput >{{newPost}}</textarea>
<button (click)=onAddPost(postInput)>Save Post </button>

ng add @angular/material
npm install --save @angular/material@8 --save-exact
that way (8 instead of 9)
import { MatInputModule} from '@angular/material'
can be used instead of: 
import {MatFormFieldModule} from '@angular/material/form-field';

