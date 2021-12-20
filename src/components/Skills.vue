<template>
	<div id="skills" class="section">
		<h1>{{ $t('skills.title') }}</h1>
		<div class="content">
			<div class="star-scheme">
				<stars class="star5" stars="9"/>
				<stars class="star4" stars="8"/>
				<stars class="star3" stars="6"/>
				<stars class="star2" stars="4"/>
				<stars class="star1" stars="2"/>
			</div>
			<h1 class="small">{{ $t('skills.languages') }}</h1>
			<div v-lazy-container="{ selector: 'img' }" class="img-container">
				<div class="block" v-for="skill in getLanguages()" :key="skill.name">
					<img :class="'star'+skill.stars" :data-src="skill.img" :alt="skill.name"/>
					<div>{{ skill.display_name }}</div>
					<div class="badge">{{ getExperienceString(skill) }}</div>				</div>
			</div>
			<h1 class="small">{{ $t('skills.frameworks') }}</h1>
			<div v-lazy-container="{ selector: 'img' }" class="img-container">
				<div class="block" v-for="skill in getFrameworks()" :key="skill.name">
					<img :class="'star'+skill.stars" :data-src="skill.img" :alt="skill.name"/>
					<div>{{ skill.display_name }}</div>
					<div class="badge">{{ getExperienceString(skill) }}</div>
				</div>
			</div>
			<h1 class="small">{{ $t('skills.environments') }}</h1>
			<div v-lazy-container="{ selector: 'img' }" class="img-container">
				<div class="block" v-for="skill in getEnvironments()" :key="skill.name">
					<img :class="'star'+skill.stars" :data-src="skill.img" :alt="skill.name"/>
					<div>{{ skill.display_name }}</div>
					<div class="badge">{{ getExperienceString(skill) }}</div>
				</div>
			</div>
			<h1 class="small">{{ $t('skills.projects') }}</h1>
			<div v-lazy-container="{ selector: 'img' }" class="img-container">
				<div>
					<img class="star5" data-src=./img/language/web.png alt="web"/>
					<div>Website Builder</div>
				</div>
				<div>
					<img class="star3" data-src=./img/language/pcbuild.png alt="pcbuild"/>
					<div>Custom Desktop PC Builder</div>
				</div>
				<div>
					<img class="star2" data-src=./img/language/android.png alt="android"/>
					<div>Android App</div>
				</div>
				<div>
					<img class="star2" data-src=./img/language/api.png alt="api"/>
					<div>Web API</div>
				</div>
				<div>
					<img class="star2" data-src=./img/language/webscraper.png alt="webscraper"/>
					<div>Web Scraper</div>
				</div>
				<div>
					<img class="star2" data-src=./img/language/minecraft.png alt="minecraft"/>
					<div>Minecraft Plugin</div>
				</div>
				<div>
					<img class="star1" data-src=./img/language/discord.png alt="discord"/>
					<div>Discord Bot</div>
				</div>
				<div>
					<img class="star1" data-src=./img/language/unity.png alt="unity"/>
					<div>Unity Game</div>
				</div>
				<div>
					<img class="star1" data-src=./img/language/magento.png alt="unity"/>
					<div>E-Commerce Webshop</div>
				</div>
			</div>
			<h1 class="small">{{ $t('skills.competencies') }}</h1>
			<div v-lazy-container="{ selector: 'img' }" class="img-container">
				<div>
					<img class="star5" data-src=./img/language/fist.png alt="fist"/>
					<div>{{ $t('skills.hardworker') }}</div>
				</div>
				<div>
					<img class="star4" data-src=./img/language/team.png alt="team"/>
					<div>{{ $t('skills.teamplayer') }}</div>
				</div>
				<div>
					<img class="star4" data-src=./img/language/problem.png alt="problem"/>
					<div>{{ $t('skills.problemsolving') }}</div>
				</div>
				<div>
					<img class="star4" data-src=./img/language/creative.png alt="light bulb"/>
					<div>{{ $t('skills.creativity') }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Stars from "@/forms/Stars";
import json from "@/../public/data/skills.json"

export default {
	name: "Skills",
	components: {Stars},
	methods: {
		getExperienceString(skill) {
			const totalxp = skill.xp
				.map(x => x.months)
				.reduce((prevValue, currValue) => prevValue + currValue)
			let years = Math.floor(totalxp / 12)
			if (years) return years+"y XP"
			return totalxp+"m XP"
		},
		getLanguages() {
			return json.filter(x => x.type === "Language")
		},
		getFrameworks() {
			return json.filter(x => x.type === "Framework")
		},
		getEnvironments() {
			return json.filter(x => x.type === "Environments")
		}
	}
}
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

.content .star-scheme {
	display: flex;
	flex-direction: row;
	text-align: center;
	justify-content: center;
	margin-bottom: 16px;

	> * {
		margin: 0 8px;
		padding: 4px;
		border-radius: 10px;
	}
}

.content .img-container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	text-align: center;
	justify-content: center;
	margin: 0 15px;
	font-size: 0.9rem;

	img {
		width: 64px;
		height: 64px;
		padding: 8px;
		border-radius: 25px 12px;
	}

	> div {
		max-width: 96px;
		margin: 16px 8px 8px;
	}
}

.star5 {
	background-color: $brilliant-red;
}

.star4 {
	background-color: $brilliant-blue;
}

.star3 {
	background-color: $brilliant-green;
}

.star2 {
	background-color: $brilliant-orange;
}

.star1 {
	background-color: $dark5;
}

.line {
	width: 95%;
	height: 1px;
	background-color: $grey;
	margin-top: 16px;
	align-self: center;
}

.block {
	position: relative;

	.badge {
		position: absolute;
		width: 40px;
		height: 16px;
		top: -14px;
		left: 17px;
		padding: 3px;
		border-radius: 6px 10px;
		background: grey;
		font-size: 12px;
	}
}
</style>
