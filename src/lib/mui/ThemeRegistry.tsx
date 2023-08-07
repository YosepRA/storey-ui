'use client';

import React from 'react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import type { ThemeRegistryProps } from 'types/mui.d.ts';

import theme from './theme.ts';

function ThemeRegistry(props: ThemeRegistryProps) {
  const { options, children } = props;

  const [{ cache, flush }] = React.useState(() => {
    const newCache = createCache(options);
    newCache.compat = true;

    const prevInsert = newCache.insert;
    let inserted: string[] = [];

    newCache.insert = (...args) => {
      const serialized = args[1];
      if (newCache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };

    const newFlush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };

    return { cache: newCache, flush: newFlush };
  });

  useServerInsertedHTML(() => {
    const names = flush();

    if (names.length === 0) {
      return null;
    }

    let styles = '';

    names.forEach((name) => {
      styles += cache.inserted[name];
    });

    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default ThemeRegistry;
