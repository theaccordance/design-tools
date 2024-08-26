import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PaletteChipComponent } from './palette-chip.component'

describe('PaletteChipComponent', () => {
    let component: PaletteChipComponent
    let fixture: ComponentFixture<PaletteChipComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PaletteChipComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(PaletteChipComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
