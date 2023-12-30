'use server'

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function addWatch(formData) {
    const model = formData.get('model')
    const brand = formData.get('brand')
    const referenceNumber = formData.get('referenceNumber')

    const cookiesStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookiesStore});
    const { data: {session}} = await supabase.auth.getSession();
    const user = session?.user;

    if (!user) {
        console.log('You need to be logged in to add a watch')
        return; 
    }

    const { data, error } = await supabase
    .from('watches')
    .insert([
        {
         model,
         brand, 
         reference_number: referenceNumber, 
         user_id: user.id 
        }
    ])

    if (error) {
        console.log('Error inserting data', error)
        return; 
    }

    revalidatePath('/watch-list');

    return { message: 'Watch added successfully'}; 
}

