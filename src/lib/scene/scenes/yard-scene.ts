import { Scene } from '../scene';

export class YardScene implements Scene {
  public topEntryText: string = `
<p>
    You are blinded by the intense noon day light as you open up the door.
    You see the dog nipping at the tires of the cars driving by.
</p>
`;
  public rightEntryText: string = `
<p>
    You see the front door to your right, and the street is off to your right.
    You see a large Pine tree in front of you with sprawling untamed land in the distance.
</p>
`;
  public bottomEntryText: string = `
<p>
    You look at a modest home in front of you.
    There is some gentle <span class="hint">cracking</span> along the aged brick.
    The windows are smudged with tiny finger prints.
    The front door is ever so slightly <span class="hint">ajar</span>, with some quiet classical music coming from inside.
</p>`;
  public leftEntryText: string = `
<p>
    You see a beautiful oak tree blanketing a portion of the yard with shade.
    The front door is to your left.
</p>
`;

  public commands: string[] = [];
}
