import type { SvelteComponentTyped } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

type RestProps = SvelteHTMLElements["form"];

export interface FormProps extends RestProps {
  /**
   * Obtain a reference to the form element
   * @default null
   */
  ref?: null | HTMLFormElement;
  /**
   * Obtain a function to use in the form element
   * @default Function
   */
  enhance?: Function;

  [key: `data-${string}`]: any;
}

export default class Form extends SvelteComponentTyped<
  FormProps,
  {
    click: WindowEventMap["click"];
    keydown: WindowEventMap["keydown"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
    submit: WindowEventMap["submit"];
    reset: WindowEventMap["reset"];
  },
  { default: {} }
> {}
