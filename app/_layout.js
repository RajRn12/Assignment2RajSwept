/**
 * File   -  _layout.js
 * Credit - Stepehen Graham
 * Author - Raj Rai
 */
import { Stack } from 'expo-router';
export default function Layout() {
	return (
		<Stack screenOptions={{
			headerTitle: "Mine Sweeper",
			headerStyle: { backgroundColor: "gray" },
			headerTitleStyle: {
				fontWeight: "bold",
				color: "white"
			},
		}}>
			<Stack.screen
				name="index"
				options={{
					headerShown: true,
					headerBackVisible: false,
				}}
			/>

			{/* Next Page */}
			<Stack.Screen
				name="page2"
				options={{
					headerTitle: "The Game",
					headerShown: true,
					headerTitleStyle: {
						color: "white",
						fontWeight: "bold"
					},
					headerTitleAlign: "center",
					headerTintColor: "yellow",

				}}
			/>

			<Stack.Screen
				name="page3"
				options={{
					headerTitle: "GAME SUMMARY",
					headerShown: true,
					headerTitleStyle: {
						color: "white",
						fontWeight: "bold"
					},
					headerTitleAlign: "center",
					headerTintColor: "yellow",

				}}
			/>
		</Stack>
	);
}