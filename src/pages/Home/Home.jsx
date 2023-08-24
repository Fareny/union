import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
// import { useTelegram } from '../../hooks/useTelegram'
import style from './Home.module.css'
import Search from '../../components/Search/Search'

const user = {
    id: 123456789,
    first_name: "John",
    last_name: "Doe",
    username: "johndoe",
    language_code: "en",
    is_bot: false,
    is_verified: true,
    is_support: false,
    is_suspended: false,
    photo: {
        small_file_id: "ABCDEFGHIJKLMNOPQRST",
        small_file_unique_id: "1234567890",
        big_file_id: "UVWXYZABCDEFGH",
        big_file_unique_id: "0987654321"
    },
    status: {
        was_online: 1635405292,
        recently_active: true
    },
    is_contact: true,
    is_mutual_contact: true,
    is_blocked: false,
    is_pending: false,
    is_self: false,
    is_broadcasting: true,
    can_be_called: true,
    can_pin_messages: false,
    has_private_calls: true,
    has_video: true,
    has_voice: true,
    can_send_messages: true,
    can_send_media_messages: true,
    can_send_polls: true,
    can_send_other_messages: true,
    can_add_web_page_previews: true,
    supports_inline_queries: true
}

function Home() {

    return (
        <div className={style.home}>

            <Navbar userName={user.first_name} />
            <Search />

        </div>
    )
}

export default Home