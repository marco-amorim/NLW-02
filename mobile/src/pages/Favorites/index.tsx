import React from 'react';
import { View, ScrollView } from 'react-native';
import PageHeader from '../../components/PageHeader';

import styles from './styles';
import TeacherItem from '../../components/TeacherItem';

function Favorites() {
	return (
		<View style={styles.container}>
			<PageHeader title="Meus Proffys favoritos" />

			<ScrollView
				style={styles.teacherList}
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
			>

			</ScrollView>
		</View>
	);
}

export default Favorites;
