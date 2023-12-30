'use server'

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function updateWatch(formData) {
    const id = formData.get('id')
    const model = formData.get('model')
    const brand = formData.get('brand')
    const referenceNumber = formData.get('referenceNumber')

    const cookiesStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookiesStore});
    const { data: {session}} = await supabase.auth.getSession();
    const user = session?.user;

    if (!user) {
        console.log('You need to be logged in to update a watch')
        return; 
    }

    const { data, error } = await supabase
    .from('watches')
    .update(
        {
         model,
         brand, 
         reference_number: referenceNumber, 
        }
    ).match({id: id, user_id: user.id})

    if (error) {
        console.log('Error updating data', error)
        return; 
    }

    revalidatePath('/watch-list');

    return { message: 'Watch updated successfully'}; 
}

