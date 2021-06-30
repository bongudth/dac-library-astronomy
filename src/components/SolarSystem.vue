<template>
  <div class="system">
	<div class="system__orbit system__orbit--sun">
		<img src="https://www.dropbox.com/s/g02pto204mz1ywi/sun.png?raw=1" alt="Sun" class="system__icon system__icon--sun">
	</div>
	
	<div class="system__orbit system__orbit--mercury">
		<div class="system__planet system__planet--mercury">
			<img src="https://www.dropbox.com/s/2o38602cmwhhdi1/mercury.png?raw=1" alt="Mercury">
		</div>
	</div>
	<div class="system__orbit system__orbit--venus">
		<div class="system__planet system__planet--venus">
			<img src="https://www.dropbox.com/s/wvictuysutiirho/venus.png?raw=1" alt="Venus">
		</div>
	</div>
	<div class="system__orbit system__orbit--earth">
		<div class="system__planet system__planet--earth">
			<img src="https://www.dropbox.com/s/ropzlyhb1v19l5t/earth.png?raw=1" alt="Earth">
		</div>
	</div>
	<div class="system__orbit system__orbit--mars">
		<div class="system__planet system__planet--mars">
			<img src="https://www.dropbox.com/s/fa9biyj617n1q30/mars.png?raw=1" alt="Mars">
		</div>
	</div>
	<div class="system__orbit system__orbit--jupiter">
		<div class="system__planet system__planet--jupiter">
			<img src="https://www.dropbox.com/s/d28oxi2c74zcoqk/jupiter.png?raw=1" alt="Jupiter">
		</div>
	</div>
	<div class="system__orbit system__orbit--saturn">
		<div class="system__planet system__planet--saturn">
			<img src="https://www.dropbox.com/s/h8pj72v6mmaa0yq/saturn.png?raw=1" alt="Saturn">
		</div>
	</div>
	<div class="system__orbit system__orbit--uranus">
		<div class="system__planet system__planet--uranus">
			<img src="https://www.dropbox.com/s/du6znsmfos2r4ry/uranus.png?raw=1" alt="Uranus">
		</div>
	</div>
	<div class="system__orbit system__orbit--neptune">
		<div class="system__planet system__planet--neptune">
			<img src="https://www.dropbox.com/s/170sr7xl6gxpona/neptune.png?raw=1" alt="Neptune">
		</div>
	</div>
	<div class="system__orbit system__orbit--pluto">
		<div class="system__planet system__planet--pluto">
			<img src="https://www.dropbox.com/s/z7axkafhs887t9b/pluto.png?raw=1" alt="Pluto">
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: "SolarSystem"
}
</script>

<style lang="scss" scoped>
.system {
  position: relative;
  max-width: 700px;
  display: flex;
	justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;

  @media (min-width: 700px) {
    padding-top: 700px;
  }

  &__sun {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__orbit {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(255, 255, 255, .3);
    border-radius: 100%;
    transform: translate(-50%, -50%);
    animation: spin infinite linear both;

    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        width: calc(#{$i}0%);
        height: calc(#{$i}0%);
      }
    }

    &--sun {
      border: none;
    }

    &--mercury {
      animation-duration: 1s;
    }

    &--venus {
      animation-duration: 2.6s;
    }

    &--earth {
      animation-duration: 4.1s;
    }

    &--mars {
      animation-duration: 7.8s;
    }

    &--jupiter {
      animation-duration: 49.8s;
    }

    &--saturn {
      animation-duration: 120.3s;
    }

    &--uranus {
      animation-duration: 348.4s;
    }

    &--neptune {
      animation-duration: 684.4s;
    }

    &--pluto {
      animation-duration: 1028.6s;
    }
  }

  &__planet {
    position: absolute;
    top: 50%;
    left: -12px;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    transform: translateY(-50%);
  }

  &__icon {
    width: 100%;
    height: 100%;
  }
}

@keyframes spin {
  from {
    transform: translate(-50%, -50%);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>