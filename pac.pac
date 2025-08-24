// mrgreen PAC file //
function FindProxyForURL(url, host)
{
    // I2P
    if (dnsDomainIs(host, '.i2p'))
        {
            return 'HTTP 127.0.0.1:4444';
        }

    // Tor
    else if (dnsDomainIs(host, '.onion'))
        {
            return 'SOCKS5 127.0.0.1:9050';
        }

    // Yggdrasil
    else if (shExpMatch(dnsResolveEx(host), "*:*"))
        {
            return 'DIRECT';
        }

    // PornHub
    else if (dnsDomainIs(host, 'pornhub.com')
    )
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }
    else if (dnsDomainIs(host, 'pornhub.org'))
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }

    // Danbooru
    else if (dnsDomainIs(host, 'donmai.us'))
        {
            return 'SOCKS5 127.0.0.1:1080';
        }

    // YouTube
    else if (dnsDomainIs(host, 'youtube.com'))
        {
            return 'SOCKS5 127.0.0.1:1080';
        }

    // Instagram
    else if (dnsDomainIs(host, 'instagram.com'))
        {
            return 'SOCKS5 127.0.0.1:1080';
        }
    else if (dnsDomainIs(host, 'cdninstagram.com'))
        {
            return 'SOCKS5 127.0.0.1:1080';
        }

    // ChatGPT
    else if (dnsDomainIs(host, 'openai.com'))
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }
    else if (dnsDomainIs(host, 'chatgpt.com'))
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }

    // Discord
    else if (
        dnsDomainIs(host, 'discord.gg'))
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }
    else if (dnsDomainIs(host, 'discord.app'))
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }
    else if (dnsDomainIs(host, 'discord.co'))
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }
    else if (dnsDomainIs(host, 'dis.gd'))
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }
    else if (dnsDomainIs(host, 'discordstatus.com'))
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }
    else if (dnsDomainIs(host, 'discord.gift'))
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }
    else if (dnsDomainIs(host, 'discord.new'))
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }
    else if (dnsDomainIs(host, 'discord.dev'))
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }
    else if (dnsDomainIs(host, 'discordcdn.com'))
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }
    else if (dnsDomainIs(host, 'discordapp.net'))
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }
    else if (dnsDomainIs(host, 'discord.media'))
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }
    else if (dnsDomainIs(host, 'discordapp.com'))
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }
    else if (dnsDomainIs(host, 'discord.com'))
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }

    // Soundcloud
    else if (dnsDomainIs(host, 'soundcloud.com'))
    {
        return 'SOCKS5 127.0.0.1:4447';
    }
}
