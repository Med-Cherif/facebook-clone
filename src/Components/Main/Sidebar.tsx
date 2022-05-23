import React, { useState } from 'react';
import { useGlobalState } from '../../AppProvider';
import SidebarLink from './SidebarLink'
const picture = require('../../Assets/profile.jpeg')

const list = [
    { id: 1, src: picture, text: 'Mohamed Cherif' },
    { id: 2, src: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeHcmuP1IRzblFQaVM_s8czqqfpKmA4GtxSp-kqYDga3FJffDB7V4JinlGY11uSiXpRV1GVOaLD09CUlGYG9cQjg", text: 'Friends' },
    { id: 3, src: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeH7aVXQUbyEz8ym62lbNnc4Z3xAUM5_bWpnfEBQzn9taih8nX8BYScuT1O0SxBkHYhqP6nJbcnfZrrboDKZT3zC", text: 'Groups' },
    { id: 4, src: "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeG0XUiAVkYN0ar_5Q6tGm-H-vsl1K9A-9v6-yXUr0D727dPKxIbKTzzspQrDQZ_FBND79Ul_7BuhgxkLTAfFbPn", text: 'Marketplace' },
    { id: 5, src: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeFa1tmfJ__jMqvS0dj6ueGg2NRDTXGHJ53Y1ENNcYcnnblnNMEIv_bHklcBrA_1PGCOkrLIfT7KsNBis0BtD0Ew", text: 'Watch' },
    { id: 6, src: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png?_nc_eui2=AeEEMtSBZ-7z2kZju19z2eRHa4YXxTz5jX9rhhfFPPmNf7_bmhDl-GNTfO0yJYZvFlGDy9yADysB3bwWNLELB01s", text: 'Memories' },
    { id: 7, src: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/CwKNCefmHON.png?_nc_eui2=AeHrf3e-JasUhP6xtV6BYGDGdJ1I9kdbuqh0nUj2R1u6qH6Ct_s9AbSNtp7MSiQ1eF03-A2fc004QgOqazq_3vKJ", text: 'Ad Center' },
    { id: 8, src: "https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png?_nc_eui2=AeEMlvnRf3_nKflUy4ErUXn51AOmmFeO9TXUA6aYV471NWocglMK4qf2zWe68zPtgG3atWdjrSYDflao_URLP8D9", text: 'Ads Manager' },
    { id: 9, src: "https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/Wmkho44tBFC.png?_nc_eui2=AeFeVFhq9YH8fLTwEOzVX6dxSiP4NsCJcqVKI_g2wIlypbK2fV65mj1bWn_mdCj9kHaqm7Frqicc2Xw-jD3WF5Et", text: 'Business Manager' },
    { id: 10, src: "https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/9s7nhm949yb.png?_nc_eui2=AeHEaTKXTL2ypdCiiqqiJKoWeGGnOd3v9yJ4Yac53e_3IjLvsdD8iNb-f8rTlFmBj2oLpExQw2n7oM-gr1hKZGxd", text: 'Community Help' },
    { id: 11, src: "https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/eXC82ZeepQ7.png?_nc_eui2=AeHASW5HgNKkh_Bf8_t2UOUeG6-rVcdLeA4br6tVx0t4Dhx468RBSDEqvPZT3TOeXMnpsNG0TA6M1mXxa_hdPt0C", text: 'Events' },
    { id: 12, src: "https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png?_nc_eui2=AeFpUj6ix6tS-FQLC9L8pLkAVivWqxwsAktWK9arHCwCSxf7XP4HuE8ubLKuxtYpndIYiILKvKtJS6S9l8Xjsk7u", text: 'Favourites' },
    { id: 13, src: "https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/JN4tUY_MDMK.png?_nc_eui2=AeHcWwIM_32fIfxUd4J8lZWyfujC-OPb9Hx-6ML449v0fG9Y0qOcYSx68QHMQQs82Y9FOFgC60A_ILWUyzGD09pb", text: 'Gaming Video' },
    { id: 14, src: "https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/AisrwUSvQf8.png?_nc_eui2=AeFPTPSkwPoDL9K5DUzqNT_JlrkQcHHjUKKWuRBwceNQohWAHCYp7AW0lpk_errjEFjwnpFvXdTrTJUsU6crjhMl", text: 'Live Video' },
    { id: 15, src: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png?_nc_eui2=AeHrSMl1z6PnzS0sl1HhC_GmhcFGLuoBbQiFwUYu6gFtCChWeuBDcpZpaYayWwVtS7dCk4mCdcsXJJF3zzx_SePc", text: 'Messenger' },
]

const Sidebar = () => {
    const [scrollbarVisible, setScrollbarVisible] = useState(false);
    const { sidebarVisible } = useGlobalState()

    const showScrollbar = () => setScrollbarVisible(true);
    const hideScrollbar = () => setScrollbarVisible(false);
    
    return (
        <div 
            onMouseEnter={showScrollbar}
            onMouseLeave={hideScrollbar}
            className={`${sidebarVisible ? 'block' : 'hidden'} bg-grayColor z-50 xl:block w-full h-full left-0 sidebar fixed xl:sticky top-[65px] pt-4 pl-1 max-h-[calc(100vh_-_65px)] overflow-auto ${scrollbarVisible ? "show-scrollbar" : ""}`}
        >
            <ul>
                {list.map((item) => (
                    <SidebarLink key={item.id} {...item} />
                ))}
            </ul>
        </div>
    )
}

export default Sidebar