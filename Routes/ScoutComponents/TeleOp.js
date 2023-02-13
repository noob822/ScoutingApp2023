import {
	StyleSheet,
	View
} from "react-native";
import { Text } from "../../Components/Themed/Text";

import BoolButton from "../../Components/Buttons/BoolButton.js";
import NumButton from "../../Components/Buttons/NumButton.js";
import CustomTextBox from "../../Components/Utility/CustomTextBox.js";
import GridArena from "../../Components/Utility/GridArena.js";

import { useDispatch } from "react-redux";
import { setDefault } from "../../Redux/Features/dataSlice.js";
import { useTheme } from "@react-navigation/native";

export default function TeleOp() {
	const dispatch = useDispatch();
	const { colors } = useTheme();
	const arenaID = "Team";

	// set default value
	dispatch(setDefault([arenaID, 0]));
	/*
	return (
		<View style={[styles.container, {backgroundColor: colors.background}]}>
			<Text style={{ textAlign: "center", fontSize: 35, fontWeight: "bold" }}>Tele-Op</Text>
			<View style={[styles.teleOpContainer, {borderColor: colors.border, backgroundColor: colors.card}]}>
				<GridArena items={[
					{ pos: [0.69420, 0.3], com: _=>(<>
						<NumButton id="TeleopUpperHubScored" width={160}>Upper Hub Scored</NumButton>
						<NumButton id="TeleopLowerHubScored" width={160}>Lower Hub Scored</NumButton>
						<NumButton id="TeleopUpperHubMissed" width={160}>Upper Hub Missed</NumButton>
						<NumButton id="TeleopLowerHubMissed" width={160}>Lower Hub Missed</NumButton>
					</>)},

					{ pos: [0.1, 0.4], com: _=>(
						<BoolButton id="PlaysDefense" bgc="lime" width={160}>Plays Defense</BoolButton>
					)},

					{ pos: [0.1, 0.5], com: _=>(
						<BoolButton id="PicksFromGround" bgc="lime" width={160}>Picks From Ground</BoolButton>
					)},
					{ pos: [0.16, 0.81], com: _=>(
						<BoolButton id="HPStation" bgc="lime" width={160}>Human Player</BoolButton>
					)},
				]} />

				<Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>Comments</Text>
				<Text style={{ textAlign: "center", fontSize: 14, marginLeft: 20, marginRight: 20, marginTop: 10 }}>
					Add any comments that you feel are useful. Does the robot get any penalties? Does the robot cycle
					efficiently? Do they struggle with picking up balls or shooting? Do they usually shoot high or low?
					Anything else that shows evidence of good/poor performance.
				</Text>
				<View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 20 }}>
					<CustomTextBox
						multi={true}
						id="TeleopComments"
						width={900}
						height={250}
						placeholder="Type your comments here..."
						borderRadius={10}
					/>
				</View>
				
				
			</View>
		</View>
	);*/

	return (
		<View>
			<BoolButton id="FedGamePieces" width={160}> Fed Game Pieces</BoolButton>
			<BoolButton id="WasDefended" width={160}> Was Defended</BoolButton>
			<BoolButton id="PlaysDefence" width={160}> Plays Defense</BoolButton>
			<NumButton id="TeleOpMissed" width={160}>TeleOp Missed</NumButton>
			<CustomTextBox
				multi={true}
				id="TeleopComments"
				width={900}
				height={250}
				placeholder="Type your comments here..."
				borderRadius={10}
			/>
			
		</View>
	);

}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 50,
		paddingVertical: 20
	},
	teleOpContainer: {
		alignItems: "center",
		borderRadius: 10,
		borderWidth: StyleSheet.hairlineWidth
	}
});
