import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";
import { ZooService } from "../../../app/service/zoo.service";

@State<any>({
  name: "zoo",
  defaults: {
    feed: false,
  },
})
@Injectable()
export class ZooState {
  constructor(private zooService: ZooService) {}
}
