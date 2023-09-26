import { world, system } from "@minecraft/server";
import { BeforeEvents, AfterEvents, SystemEvents } from "../../@modules";

// Before events
world.beforeEvents.chatSend.subscribe((cb) => BeforeEvents.emit("chat", cb));

world.beforeEvents.dataDrivenEntityTriggerEvent.subscribe((cb) =>
  BeforeEvents.emit("dataDrivenEntity", cb)
);

world.beforeEvents.explosion.subscribe((cb) =>
  BeforeEvents.emit("explosion", cb)
);

world.beforeEvents.itemDefinitionEvent.subscribe((cb) =>
  BeforeEvents.emit("itemDefinition", cb)
);

world.beforeEvents.itemUse.subscribe((cb) => BeforeEvents.emit("itemUse", cb));

world.beforeEvents.itemUseOn.subscribe((cb) =>
  BeforeEvents.emit("itemUseOn", cb)
);

world.beforeEvents.pistonActivate.subscribe((cb) =>
  BeforeEvents.emit("pistonActivate", cb)
);

world.beforeEvents.playerBreakBlock.subscribe((cb) =>
  BeforeEvents.emit("playerBreakBlock", cb)
);

world.beforeEvents.playerPlaceBlock.subscribe((cb) =>
  BeforeEvents.emit("playerPlaceBlock", cb)
);

// After events
world.afterEvents.blockExplode.subscribe((cb) =>
  AfterEvents.emit("blockExplode", cb)
);

world.afterEvents.buttonPush.subscribe((cb) =>
  AfterEvents.emit("buttonPush", cb)
);

world.afterEvents.chatSend.subscribe((cb) => AfterEvents.emit("chat", cb));

world.afterEvents.dataDrivenEntityTriggerEvent.subscribe((cb) =>
  AfterEvents.emit("dataDrivenEntity", cb)
);

world.afterEvents.effectAdd.subscribe((cb) =>
  AfterEvents.emit("effectAdd", cb)
);

world.afterEvents.entityDie.subscribe((cb) =>
  AfterEvents.emit("entityDie", cb)
);

world.afterEvents.entityHealthChanged.subscribe((cb) =>
  AfterEvents.emit("entityHealthChanged", cb)
);

world.afterEvents.entityHitBlock.subscribe((cb) =>
  AfterEvents.emit("entityHitBlock", cb)
);

world.afterEvents.entityHitEntity.unsubscribe((cb) =>
  AfterEvents.emit("entityHitEntity", cb)
);

world.afterEvents.entityHurt.subscribe((cb) =>
  AfterEvents.emit("entityHurt", cb)
);

world.afterEvents.entityLoad.subscribe((cb) =>
  AfterEvents.emit("entityLoad", cb)
);

world.afterEvents.entityRemove.subscribe((cb) =>
  AfterEvents.emit("entityRemove", cb)
);

world.afterEvents.entitySpawn.subscribe((cb) =>
  AfterEvents.emit("entitySpawn", cb)
);

world.afterEvents.explosion.subscribe((cb) =>
  AfterEvents.emit("explosion", cb)
);

world.afterEvents.itemCompleteUse.subscribe((cb) =>
  AfterEvents.emit("itemCompleteUse", cb)
);

world.afterEvents.itemDefinitionEvent.subscribe((cb) =>
  AfterEvents.emit("itemDefinition", cb)
);

world.afterEvents.itemReleaseUse.subscribe((cb) =>
  AfterEvents.emit("itemReleaseUse", cb)
);

world.afterEvents.itemStartUse.subscribe((cb) =>
  AfterEvents.emit("itemStartUse", cb)
);

world.afterEvents.itemStartUseOn.subscribe((cb) =>
  AfterEvents.emit("itemStartUseOn", cb)
);

world.afterEvents.itemStopUse.subscribe((cb) =>
  AfterEvents.emit("itemStopUse", cb)
);

world.afterEvents.itemStopUseOn.subscribe((cb) =>
  AfterEvents.emit("itemStopUseOn", cb)
);

world.afterEvents.itemUse.subscribe((cb) => AfterEvents.emit("itemUse", cb));

world.afterEvents.itemUseOn.subscribe((cb) =>
  AfterEvents.emit("itemUseOn", cb)
);

world.afterEvents.leverAction.subscribe((cb) =>
  AfterEvents.emit("leverAction", cb)
);

world.afterEvents.messageReceive.subscribe((cb) =>
  AfterEvents.emit("messageReceive", cb)
);

world.afterEvents.pistonActivate.subscribe((cb) =>
  AfterEvents.emit("pistonActivate", cb)
);

world.afterEvents.playerBreakBlock.subscribe((cb) =>
  AfterEvents.emit("playerBreakBlock", cb)
);

world.afterEvents.playerJoin.subscribe((cb) =>
  AfterEvents.emit("playerJoin", cb)
);

world.afterEvents.playerLeave.subscribe((cb) =>
  AfterEvents.emit("playerLeave", cb)
);

world.afterEvents.playerPlaceBlock.subscribe((cb) =>
  AfterEvents.emit("playerPlaceBlock", cb)
);

world.afterEvents.playerSpawn.subscribe((cb) =>
  AfterEvents.emit("playerSpawn", cb)
);

world.afterEvents.pressurePlatePop.subscribe((cb) =>
  AfterEvents.emit("pressurePlatePop", cb)
);

world.afterEvents.pressurePlatePush.subscribe((cb) =>
  AfterEvents.emit("pressurePlatePush", cb)
);

world.afterEvents.projectileHitBlock.subscribe((cb) =>
  AfterEvents.emit("projectileHitBlock", cb)
);

world.afterEvents.projectileHitEntity.subscribe((cb) =>
  AfterEvents.emit("projectileHitEntity", cb)
);

world.afterEvents.targetBlockHit.subscribe((cb) =>
  AfterEvents.emit("targetBlockHit", cb)
);

world.afterEvents.tripWireTrip.subscribe((cb) =>
  AfterEvents.emit("tripWireTrip", cb)
);

world.afterEvents.weatherChange.subscribe((cb) =>
  AfterEvents.emit("weatherChange", cb)
);

world.afterEvents.worldInitialize.subscribe((cb) =>
  AfterEvents.emit("worldInitialize", cb)
);

// System events
system.beforeEvents.watchdogTerminate.subscribe((cb) =>
  SystemEvents.emit("watchdogTerminate", cb)
);

system.afterEvents.scriptEventReceive.subscribe((cb) =>
  SystemEvents.emit("scriptEventReceive", cb)
);
