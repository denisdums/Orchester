import type {ActionFunctionArgs} from "@remix-run/node";
import {SessionService} from "~/services/session.service";
import {EventService} from "~/services/event.service";

export async function action({request, params}: ActionFunctionArgs) {
    const {isLoggedIn} = await SessionService.isUserLoggedIn(request);

    if (!isLoggedIn) {
        throw new Response(JSON.stringify({success: false, errorMessage: 'Forbidden'}), {status: 400});
    }

    if (!params.id || params.id === 'undefined') {
        throw new Response(JSON.stringify({success: false, errorMessage: 'No ID given'}), {status: 400});
    }
    const body = await request.formData();
    const presencesIds = body.getAll('presence') as string[];
    const excusesIds = body.getAll('excuse') as string[];

    let success, event;
    try {
        event = await EventService.savePointing(params.id, presencesIds, excusesIds);
        success = true;
    } catch (e) {
        success = false;
    }

    return {success, updated: new Date(), event};
}