import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

function TeacherList() {
	const [areFiltersVisible, setAreFiltersVisible] = useState(false);

	function handleToggleFiltersVisible() {
		setAreFiltersVisible(!areFiltersVisible);
	}

	return (
		<View style={styles.container}>
			<PageHeader
				title="Proffys disponíveis"
				headerRight={
					<BorderlessButton onPress={handleToggleFiltersVisible}>
						<Feather name="filter" size={20} color="#FFF" />
					</BorderlessButton>
				}
			>
				{areFiltersVisible && (
					<View style={styles.searchform}>
						<Text style={styles.label}>Matéria</Text>
						<TextInput
							placeholderTextColor="#c1bccc"
							style={styles.input}
							placeholder="Qual a matéria?"
						/>

						<View style={styles.inputGroup}>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>Dia da semana</Text>
								<TextInput
									placeholderTextColor="#c1bccc"
									style={styles.input}
									placeholder="Qual o dia?"
								/>
							</View>

							<View style={styles.inputBlock}>
								<Text style={styles.label}>Horário</Text>
								<TextInput
									placeholderTextColor="#c1bccc"
									style={styles.input}
									placeholder="Qual horário?"
								/>
							</View>
						</View>

						<RectButton style={styles.submitButton}>
							<Text style={styles.submitButtonText}>Filtrar</Text>
						</RectButton>
					</View>
				)}
			</PageHeader>
			<ScrollView
				style={styles.teacherList}
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
			>
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
			</ScrollView>
		</View>
	);
}

export default TeacherList;
