import { FlatList, RefreshControl, StyleSheet } from 'react-native';

import { FeedbackState } from '../components/FeedbackState';
import { Loading } from '../components/Loading';
import { ShowCard } from '../components/ShowCard';
import { useShows } from '../hooks/UseShows';
import { colors } from '../theme/Colors';

export function ShowsScreen() {
  const { shows, isLoading, isRefreshing, error, retry, refresh } = useShows();

  if (isLoading && shows.length === 0) {
    return <Loading message="Cargando series de TVMaze..." />;
  }

  if (error && shows.length === 0) {
    return <FeedbackState message={error} onRetry={retry} />;
  }

  return (
    <FlatList
      data={shows}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ShowCard {...item} />}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.content}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={refresh} tintColor={colors.primary} />
      }
      ListHeaderComponent={
        error ? <FeedbackState message={`No se pudo actualizar: ${error}`} onRetry={refresh} /> : null
      }
      ListEmptyComponent={<FeedbackState message="TVMaze no devolvió series disponibles." onRetry={retry} />}
      initialNumToRender={6}
      maxToRenderPerBatch={8}
      windowSize={7}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 32,
    gap: 16,
  },
});
