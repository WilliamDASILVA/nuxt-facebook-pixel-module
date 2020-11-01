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

interface NuxtFacebookPixel {
    enable(): void;
    init(): void;
    setPixelId(pixelId: string): void;
    track(event: null | FacebookEvent, parameters?: FacebookEventParameters): void;
    query<T extends object>(key: string, value: string, parameters?: T): void;
}

declare module 'vue/types/vue' {
    interface Vue {
        $fb: NuxtFacebookPixel;
    }
}
