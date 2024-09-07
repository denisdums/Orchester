import type {ActionFunctionArgs} from "@remix-run/node";
import {SessionService} from "~/services/SessionService";
import {EventService} from "~/services/EventService";

export async function action({request, params}: ActionFunctionArgs) {
    const {isLoggedIn, userId} = await SessionService.isUserLoggedIn(request);

    if (!isLoggedIn || !userId) {
        throw new Response(JSON.stringify({success: false, errorMessage: 'Forbidden'}), {status: 400});
    }

    if (!params.id || params.id === 'undefined') {
        throw new Response(JSON.stringify({success: false, errorMessage: 'No ID given'}), {status: 400});
    }
    const body = await request.formData();
    const responseIsPresent = body.get('isPresent') === 'true';

    let success, event;
    try {
        event = await EventService.saveResponse(params.id, userId, responseIsPresent);
        success = true;
    } catch (e) {
        console.log(e);
        success = false;
    }

    return {success, updated: new Date(), event};
}