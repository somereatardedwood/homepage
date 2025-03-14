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
    else if (dnsDomainIs(host, 'pornhub.com'))
        {
            return 'SOCKS5 [324:71e:281a:9ed3::fa11]:1080';
        }
    else if (dnsDomainIs(host, 'pornhub.org'))
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
    else if (dnsDomainIs(host, 'instagram.com'))
        {
            return 'SOCKS5 127.0.0.1:1080';
        }
    else if (shExpMatch(dnsResolveEx(host), "*:*"))
        {
            return 'DIRECT';
        }
}