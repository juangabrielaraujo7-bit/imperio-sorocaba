import { business } from '../data/business';
import { services } from '../data/services';

/** URL absoluta a partir de um caminho do site. */
export function absoluteUrl(path: string, site: URL | string = business.siteUrl): string {
  return new URL(path, site).toString();
}

/**
 * JSON-LD da empresa (schema.org).
 * ElectronicsStore é um LocalBusiness; a loja aparece no Google ligada a
 * eletrônicos/acessórios e presta assistência técnica.
 * aggregateRating usa exatamente os dados reais de business.ts.
 */
export function localBusinessJsonLd(site: URL | string = business.siteUrl) {
  const { address, geo, phone, instagram, maps, reviews } = business;
  const id = absoluteUrl('/#empresa', site);

  // Agrupa dias com o mesmo horário
  const groups = new Map<string, string[]>();
  for (const d of business.hours) {
    if (!d.opens || !d.closes) continue;
    const key = `${d.opens}-${d.closes}`;
    groups.set(key, [...(groups.get(key) ?? []), d.schemaDay]);
  }
  const openingHoursSpecification = [...groups.entries()].map(([key, days]) => {
    const [opens, closes] = key.split('-');
    return { '@type': 'OpeningHoursSpecification', dayOfWeek: days, opens, closes };
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'ElectronicsStore',
    '@id': id,
    name: business.name,
    url: absoluteUrl('/', site),
    logo: absoluteUrl('/brand/logo-512.png', site),
    image: absoluteUrl('/og-image.png', site),
    telephone: `+${phone.e164}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${address.street} - ${address.complement}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    areaServed: { '@type': 'City', name: `${address.city} - ${address.state}` },
    hasMap: maps.profileUrl,
    openingHoursSpecification,
    sameAs: [instagram.url, maps.profileUrl],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviews.rating.toFixed(1),
      reviewCount: reviews.count,
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          areaServed: { '@type': 'City', name: address.city },
          ...(s.page ? { url: absoluteUrl(`/servicos/${s.slug}/`, site) } : {}),
        },
      })),
    },
  };
}

export function webSiteJsonLd(site: URL | string = business.siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: business.name,
    url: absoluteUrl('/', site),
    inLanguage: 'pt-BR',
    publisher: { '@id': absoluteUrl('/#empresa', site) },
  };
}
