/* eslint-disable camelcase */
import Vue from 'vue';

type FacebookEvent =
    | 'AddPaymentInfo'
    | 'AddToCart'
    | 'AddToWishlist'
    | 'CompleteRegistration'
    | 'Contact'
    | 'CustomizeProduct'
    | 'Donate'
    | 'InitiateCheckout'
    | 'Lead'
    | 'PageView'
    | 'Purchase'
    | 'Schedule'
    | 'Search'
    | 'StartTrial'
    | 'SubmitApplication'
    | 'Subscribe'
    | 'ViewContent'
    | string;

interface FacebookContentObject {
    id: string;
    quantity: number;
    [prop: string]: string | number;
}

interface FacebookEventParameters {
    content_category?: string;
    content_ids?: Array<number | string>;
    content_name?: string;
    content_type?: 'product' | 'product_group';
    contents?: FacebookContentObject[];
    currency?: string; // The currency for the value specified.
    num_items?: number; // Used with InitiateCheckout event. The number of items when checkout was initiated.
    predicted_ltv?: number; // Predicted lifetime value of a subscriber as defined by the advertiser and expressed as an exact value.
    search_string?: string; // Used with the Search event. The string entered by the user for the search.
    status?: boolean; // Used with the CompleteRegistration event, to show the status of the registration.
    value?: number; // The value of a user performing this event to the business.
}

interface FacebookUserData {
  em?: string // Email jsmith@example.com
  fn?: string // First name Lowercase letters
  ln?: string // Last name Lowercase letters
  ph?: number // Phone Digits only including country code and area code 16505554444
  ID?: string | number // External external_id Any unique ID from the advertiser, such as loyalty membership ID, user ID, and external cookie
  ge?: 'f' | 'm' // Gender Single lowercase letter, f or m, if unknown, leave blank
  db?: number // Birthdate Digits only with birth year, month, then day 19910526 for May 26, 1991.
  ct?: string // City Lowercase with any spaces removed
  or?: string // State Province st Lowercase two - letter state or province code ca
  or?: number // Zip Postal Code zp Digits only 94025
  country?: string // Country Lowercase two - letter country code us
}

interface NuxtFacebookPixel {
    enable(): void;
    disable(): void;
    init(): void;
    setPixelId(pixelId: string): void;
    setUserData(userData?: FacebookUserData): void;
    track(event: null | FacebookEvent, parameters?: FacebookEventParameters): void;
    query<T extends object>(key: string, value: string, parameters?: T): void;
}

declare module 'vue/types/vue' {
    interface Vue {
        $fb: NuxtFacebookPixel;
    }
}
