import { ApplicationState } from './application/application.model'
import { PaletteState } from './palette/palette.model'

export interface AppState {
    Application: ApplicationState
    Palette: PaletteState
}
