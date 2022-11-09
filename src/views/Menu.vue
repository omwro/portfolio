<template>
	<div id="menu" :class="menu ? 'active' : ''">
		<div class="header p-3">
			<div class="title">Menu</div>
			<div class="cross" @click="closeMenu">
				<span class="cross-one"></span>
				<span class="cross-two"></span>
			</div>
		</div>
		<div id="menulist">
			<a
				v-for="n in nav"
				:href="n.href"
				@click="closeMenu"
				:key="n.name"
				>{{ $t(n.translate) }}</a
			>
			<template v-if="dark">
				<a>
					<div class="a-block" @click="onDarkModeToggle">
						<img src="img/actions/sun.png" class="icon" alt="sun" />
						<span>{{ $t("preferences.lightmode") }}</span>
					</div>
				</a>
			</template>
			<template v-else>
				<a>
					<div class="a-block" @click="onDarkModeToggle">
						<img
							src="img/actions/moon.png"
							class="icon"
							alt="moon" />
						<span>{{ $t("preferences.darkmode") }}</span>
					</div>
				</a>
			</template>
			<template v-if="lan === 'nl'">
				<a>
					<div class="a-block" @click="setLanguage('en')">
						<img src="img/actions/usa.png" class="icon" alt="en" />
						<span>{{ $t("general.en") }}</span>
					</div>
				</a>
			</template>
			<template v-else>
				<a>
					<div class="a-block" @click="setLanguage('nl')">
						<img src="img/actions/nl.png" class="icon" alt="en" />
						<span>{{ $t("general.nl") }}</span>
					</div>
				</a>
			</template>
		</div>
	</div>
</template>

<script>
import json from "../../public/data/navigation.json";

export default {
	name: "Menu",
	data: () => ({
		nav: json,
	}),
	computed: {
		dark() {
			return this.$store.state.darkmode;
		},
		menu() {
			return this.$store.state.menu;
		},
		lan() {
			return this.$i18n.locale;
		},
	},
	methods: {
		onDarkModeToggle() {
			this.$store.commit("toggleDarkmode");
		},
		closeMenu() {
			this.$store.commit("toggleMenu");
		},
		setLanguage(lan) {
			this.$i18n.locale = lan;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "src/styles/variables";

#menu {
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	position: fixed;
	height: fit-content;
	max-height: calc(100% - 32px);
	width: 0;
	bottom: 0;
	right: 0;
	padding: 0;
	top: 0;
	background-color: $background-light;
	z-index: 15;
	transition: 0.5s;
	border-bottom: solid 0 transparent;
	border-left: solid 0 transparent;

	&.active {
		width: 100%;
		border-bottom: solid 2px $accent;
		transition: 0.5s;
		transition-timing-function: ease-in-out;

		@media (min-width: $mq-sm) {
			width: 160px;
			border-left: solid 2px $accent;
			border-radius: 0 0 0 24px;
		}
	}

	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 1.5rem;
		justify-content: space-between;

		.title {
			border-bottom: solid 2px $accent;
		}

		.cross {
			width: 25px;
			height: 25px;
			display: flex;
			flex-direction: column;
			position: relative;
			cursor: pointer;

			span {
				width: 100%;
				position: absolute;
				border-top: solid 3px;
				top: 10px;
			}

			.cross-one {
				transform: rotate(45deg);
			}

			.cross-two {
				transform: rotate(135deg);
			}

			&:hover {
				.cross-one {
					transform: rotate(135deg);
					transition: 0.3s;
				}

				.cross-two {
					transform: rotate(225deg);
					transition: 0.3s;
				}
			}
		}
	}

	#menulist {
		margin-left: 6px;

		a {
			display: flex;
			font-size: 1rem;
			color: inherit;
			text-decoration: none;
			margin: 16px;
			justify-content: center;

			&:hover {
				color: $accent;
			}
		}
	}
}

.a-block {
	display: flex;
	flex-direction: column;
	cursor: pointer;
	margin-top: 16px;

	> * {
		align-self: center;

		&:first-child {
			margin-bottom: 4px;
		}
	}

	.icon {
		width: 32px;
		height: 32px;
	}
}

#app.dark #menu {
	background-color: $background-dark;
}
</style>
