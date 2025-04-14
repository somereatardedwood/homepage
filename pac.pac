// mrgreen PAC file //
function FindProxyForURL(url, host)
{
    if (dnsDomainIs(host, '.i2p'))
        {
            return 'SOCKS5 127.0.0.1:4447';
        }
    else if (dnsDomainIs(host, '.onion'))
        {
            return 'SOCKS5 127.0.0.1:9050';
        }
    else if (shExpMatch(dnsResolveEx(host), "*:*"))
        {
            return 'DIRECT';
        }
    else if (
        dnsDomainIs(host, 'pornhub.com')
        || dnsDomainIs(host, 'pornhub.org')
    )
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }
    else if (dnsDomainIs(host, 'donmai.us'))
        {
            return 'SOCKS5 127.0.0.1:1080';
        }
    else if (dnsDomainIs(host, 'youtube.com'))
        {
            return 'SOCKS5 127.0.0.1:1080';
        }
    else if (
        dnsDomainIs(host, 'instagram.com')
        || dnsDomainIs(host, 'cdninstagram.com')
    )
        {
            return 'SOCKS5 127.0.0.1:1080';
        }
    else if (
        dnsDomainIs(host, 'openai.com')
        || dnsDomainIs(host, 'chatgpt.com')
    )
        {
            return 'SOCKS5 127.0.0.1:9050';
        }
    else if (
        dnsDomainIs(host, 'discord.gg')
        || dnsDomainIs(host, 'discord.com')
        || dnsDomainIs(host, 'discordapp.com')
        || dnsDomainIs(host, 'discord.media')
        || dnsDomainIs(host, 'discordapp.net')
        || dnsDomainIs(host, 'discordcdn.com')
        || dnsDomainIs(host, 'discord.dev')
        || dnsDomainIs(host, 'discord.new')
        || dnsDomainIs(host, 'discord.gift')
        || dnsDomainIs(host, 'discordstatus.com')
        || dnsDomainIs(host, 'dis.gd')
        || dnsDomainIs(host, 'discord.co')
        || dnsDomainIs(host, 'discord.app')        
    )
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }
}