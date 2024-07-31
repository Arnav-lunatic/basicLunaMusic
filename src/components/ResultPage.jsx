import React, { useEffect, useState, useContext } from "react";
import { TrackDataContext } from "../context/TrackDataContext";
import ReactLoading from "react-loading";
import { LuDownload } from "react-icons/lu";
import SearchBar from "./SearchBar";
import useDownloader from "react-use-downloader";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function ResultPage() {
	const { searchTrack, quality } = useContext(TrackDataContext);
	const { download } = useDownloader();

	const navigate = useNavigate()

	const [isLoading, setIsLoading] = useState(false);
	const [tracksData, setTracksData] = useState("");

	const search = (searchFor) => {
		setIsLoading(true);
		fetch(`https://saavn.dev/api/search/songs?query=${searchFor}`)
			.then((response) => response.json())
			.then((data) => {
				setTracksData(data);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		search(searchTrack);
	}, [searchTrack]);

	const ArtistLabel = ({ artists = "none" }) => {
		return artists.map((eachArtist, index) => {
			return (
				<span key={index}>
					<span>{eachArtist.name}</span>
					{artists.length - 1 !== index ? ", " : ""}
				</span>
			);
		});
	};

	const handleDownload = (data) => {
		download(data.downloadUrl[quality].url, `${data.name}.mp3`);
	};

	const SongCard = ({ data }) => {
		return (
			<div
				onClick={() => handleDownload(data)}
				className="flex justify-between items-center w-[95dvw] max-w-[1000px] m-auto mb-8 cursor-pointer"
			>
				<div className="flex gap-4">
					<div>
						<img
							className="rounded-lg w-20 md:w-24"
							src={data.image[1].url}
							alt=""
						/>
					</div>
					<div>
						<h2 className="text-2xl font-bold truncate w-[50vw] lg:w-auto">
							{data.name}
						</h2>
						<h3 className="text-md truncate w-[50vw] lg:w-auto">
							<ArtistLabel artists={data.artists.primary} />
						</h3>
						<p className="text-xs">{data.year}</p>
					</div>
				</div>
				<LuDownload className="w-8 h-8" />
			</div>
		);
	};

	return (
		<div className="grid gap-8 py-4">

			<div
				className="absolute top-4 left-2 cursor-pointer"
				onClick={() => navigate('/')}>
				<IoMdArrowRoundBack className="h-12 w-12" />
			</div>

			<SearchBar />
			{isLoading ? (
				<ReactLoading
					className="m-auto"
					type="bubbles"
					color="#9233EA"
					height={100}
					width={150}
				/>
			) : (
				<>
					<div>
						{tracksData?.data?.results.map((eachData, index) => {
							return <SongCard key={index} data={eachData} />;
						})}
					</div>
				</>
			)}	
		</div>
	);
}

export default ResultPage;
