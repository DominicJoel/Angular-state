import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AnimalService {
  constructor() {}

  feed(animalsToFeed: string) {
    const animal: string = "zebra";

    return Observable.of(new Object()).mapTo(animal);
  }

  async feedAsync(animalsToFeed: string) {
    const animal: string = "zebra";

    return Observable.of(new Object()).mapTo(animal);
  }
}
