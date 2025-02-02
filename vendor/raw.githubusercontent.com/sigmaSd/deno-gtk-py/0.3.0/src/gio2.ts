import type { Callback, Gtk4_ } from "../mod.ts";

export interface Gio {
  Menu: Menu;
  SimpleAction: SimpleAction;
  ListStore: ListStore;
  File: File;
}
export interface Menu {
  new: () => Menu;
  append(arg0: string, arg1: string): void;
}
export interface SimpleAction {
  // deno-lint-ignore no-explicit-any
  new: (name: string, arg?: any) => SimpleAction;
  connect(signal: "activate", callback: Callback): void;
}

export interface ListStore {
  //FIXME: Gio.ListStore.new(Gtk.FileFilter)
  // takes a type instead of a value
  // deno-lint-ignore no-explicit-any
  new: (filter: any) => ListStore;
  append(f: Gtk4_.FileFilter): void;
}

// deno-lint-ignore no-empty-interface
export interface ListModel {
}

export interface File {
  new_for_uri(uri: string): File;
  get_path(): { valueOf: () => string };
}
